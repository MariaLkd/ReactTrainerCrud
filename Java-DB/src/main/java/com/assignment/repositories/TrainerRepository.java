/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.assignment.repositories;

import com.assignment.entities.Trainer;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author Maria
 */
public interface TrainerRepository extends JpaRepository<Trainer, Integer>{
    
}
