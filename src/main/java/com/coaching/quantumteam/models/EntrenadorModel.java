package com.coaching.quantumteam.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity
@Setter
@Table(name="Entrenador")
public class EntrenadorModel {
    @Id
    private double documento;
    private String nombre;
    private String apellido;
    private String telefono;
    private String correo;
    
}
