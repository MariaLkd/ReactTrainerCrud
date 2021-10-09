/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.assignment.services;

import com.assignment.entities.Trainer;
import java.util.List;
import org.springframework.stereotype.Service;

/**
 *
 * @author Maria
 */
@Service
public interface ITrainerService {

    public boolean insertTrainer(Trainer trainer);

    public List<Trainer> getTrainers();
    
    public boolean findById(int id);

    public Trainer getById(int id);
    
    public boolean updateTrainer(Trainer tr);

    public boolean deleteTrainer(int id);

}
