package com.coaching.quantumteam.controllers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coaching.quantumteam.models.SeniorModel;
import com.coaching.quantumteam.repositories.SeniorRepository;

@RestController
@RequestMapping(path="/senior")
public class SeniorController {
    @Autowired
    SeniorRepository seniorRepository;

    @GetMapping()
    public Iterable<SeniorModel> optenerListaDeSeniors(){
        return seniorRepository.findAll();
    }

    //se tienen los dos metodos create and update
    @PostMapping()
    public SeniorModel saveNewSenior(@RequestBody SeniorModel senior){
        return seniorRepository.save(senior);

    }

    @DeleteMapping(path = "/{documento}")
    public void deleteSenior(@PathVariable("documento") Double documento){
        seniorRepository.deleteById(documento);
    }
}
