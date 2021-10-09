/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.assignment.services;

import com.assignment.entities.Trainer;
import com.assignment.repositories.TrainerRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Maria
 */
@Service
public class TrainerServiceImpl implements ITrainerService {

    @Autowired
    TrainerRepository trainerRepository;

    @Override
    public List<Trainer> getTrainers() {
        return trainerRepository.findAll();
    }

    @Override
    public boolean insertTrainer(Trainer trainer) {
        return trainerRepository.save(trainer).getTrainerid() > 0;
    }

    @Override
    public boolean updateTrainer(Trainer tr) {
        Trainer trainer = trainerRepository.findById(tr.getTrainerid()).get();
        trainer.setFirstname(tr.getFirstname());
        trainer.setLastname(tr.getLastname());
        trainer.setSubject(tr.getSubject());
        trainerRepository.save(trainer);
        return true;
    }

    public boolean findById(int id){
        return(trainerRepository.findById(id).get().getTrainerid()>0);
    }
        
    public Trainer getById(int id) {
        return (trainerRepository.findById(id).get());
    }

    public boolean deleteTrainer(int id) {
        trainerRepository.deleteById(id);
        return true;
    }    

}
