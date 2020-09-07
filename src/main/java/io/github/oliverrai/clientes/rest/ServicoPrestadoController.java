package io.github.oliverrai.clientes.rest;

import io.github.oliverrai.clientes.model.Cliente;
import io.github.oliverrai.clientes.model.ServicoPrestado;
import io.github.oliverrai.clientes.repository.ClienteRepository;
import io.github.oliverrai.clientes.repository.ServicoPrestadoRepository;
import io.github.oliverrai.clientes.rest.Dto.ServicoPrestadoDTO;
import io.github.oliverrai.clientes.util.BigDecimalConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@RestController
@RequestMapping("/api/servicos-prestados")
@RequiredArgsConstructor
public class ServicoPrestadoController {

    private final ClienteRepository clienteRepository;
    private final ServicoPrestadoRepository repository;
    private final BigDecimalConverter bigDecimalConverter;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ServicoPrestado salvar(@RequestBody ServicoPrestadoDTO dto){
        LocalDate data = LocalDate.parse(dto.getData(), DateTimeFormatter.ofPattern("dd/MM/yyyy"));
        Integer idCliente = dto.getIdCliente();

        Cliente cliente =
                clienteRepository
                    .findById(idCliente)
                    .orElseThrow(() ->
                            new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cliente inexistente"));

        ServicoPrestado sp = new ServicoPrestado();
        sp.setDescricao(dto.getDescricao());
        sp.setData(data);
        sp.setCliente(cliente);
        sp.setValor(bigDecimalConverter.converter(dto.getPreco()));

        return repository.save(sp);
    }
}
