package com.coaching.quantumteam.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.coaching.quantumteam.models.EntrenadorModel;

@Repository
public interface EntrenadorRepository extends CrudRepository<EntrenadorModel, Double>{
    
}
