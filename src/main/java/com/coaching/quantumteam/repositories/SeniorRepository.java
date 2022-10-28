package com.coaching.quantumteam.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.coaching.quantumteam.models.SeniorModel;

@Repository
public interface SeniorRepository extends CrudRepository<SeniorModel, Double>{
    
}
