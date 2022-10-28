package com.coaching.quantumteam.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coaching.quantumteam.models.EntrenadorModel;
import com.coaching.quantumteam.repositories.EntrenadorRepository;

@RestController
@RequestMapping(path="/entrenador")

public class EntrenadorControler {
    @Autowired
    EntrenadorRepository entrenadorRepositorio;

    @GetMapping()
    public Iterable<EntrenadorModel> obtenerListaDeEntrenadores(){
        return entrenadorRepositorio.findAll();
    }

    //se tienen los dos metodos create and update
    @PostMapping()
        public EntrenadorModel saveNewEntrenador(@RequestBody EntrenadorModel entrenador){
            return entrenadorRepositorio.save(entrenador);
        }


    @DeleteMapping(path = "/{documento}")
        public void deleteEntrenador(@PathVariable("documento") Double documento){
            entrenadorRepositorio.deleteById(documento);
        }
    
}