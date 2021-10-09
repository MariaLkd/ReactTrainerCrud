/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.assignment.controllers;

import com.assignment.entities.Trainer;
import com.assignment.services.TrainerServiceImpl;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Maria
 */
@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000")
public class TrainerRestController {

    @Autowired
    private TrainerServiceImpl trainerService;

    @GetMapping("/trainers")
    public List<Trainer> getAll() {
        List<Trainer> trainers = null;
            trainers = trainerService.getTrainers();
        return trainers;
    }

    @GetMapping("/trainers/{id}")
    public Trainer getById(@PathVariable(name = "id") int id) {
        Trainer trainer = trainerService.getById(id);
        if (trainer == null) {
            throw new RuntimeException("Trainer id not found - " + id);
        }
        return trainer;
    }

    @PostMapping("/trainers")
    public Trainer addTrainer(@RequestBody Trainer trainer) {
        trainer.setTrainerid(0);
        trainerService.insertTrainer(trainer);
        return trainer;
    }

    @PutMapping("/trainers")
    public Trainer updateTrainer(@RequestBody Trainer trainer) {
        trainerService.updateTrainer(trainer);
        return trainer;
    }

    @DeleteMapping("/trainers/{id}")
    public String deleteTrainer(@PathVariable(name = "id") int id) {
        Trainer trainer = trainerService.getById(id);
        if (trainer == null) {
            throw new RuntimeException("Trainer id not found - " + id);
        }
        trainerService.deleteTrainer(id);
        return "Deleted trainer id - " + id;
    }
    
//    @DeleteMapping("/trainers/{ids}")
//    public String deleteTrainers(@PathVariable(name="ids") String[] ids) {
//        for (String id : ids) {
//            if (trainerService.findById(Integer.parseInt(id))){
//                trainerService.deleteTrainer(Integer.parseInt(id));
//            }
//        }
//        return "Deleted trainers";
//    }

}
