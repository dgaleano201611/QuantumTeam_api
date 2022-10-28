package com.coaching.quantumteam.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coaching.quantumteam.models.DirectorModel;
import com.coaching.quantumteam.repositories.DirectorRepository;


@RestController
@RequestMapping(path = "/director")
public class DirectorController {
    @Autowired
    DirectorRepository directorRepository;

    @GetMapping()
    public Iterable<DirectorModel> obtenerListaDeDirectores(){
        return directorRepository.findAll();

    }

    //se tienen los dos metodos create and update
    @PostMapping()
    public DirectorModel saveNewDirector(@RequestBody DirectorModel director){
        return directorRepository.save(director);
    }
    
    @DeleteMapping(path="/{documento}")
    public void deleteDirector(@PathVariable("documento") Double documento){
        directorRepository.deleteById(documento);
    }

}
