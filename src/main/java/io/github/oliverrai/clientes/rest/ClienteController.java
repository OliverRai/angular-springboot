package io.github.oliverrai.clientes.rest;

import io.github.oliverrai.clientes.model.Cliente;
import io.github.oliverrai.clientes.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/clientes")
public class ClienteController {


    //pode ser feito sem construtor
    //@Autowired
    //private ClienteRepository repository

    private final ClienteRepository repository;

    @Autowired
    public ClienteController(ClienteRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Cliente savar(@RequestBody Cliente cliente){
        return repository.save(cliente);
    }
}
