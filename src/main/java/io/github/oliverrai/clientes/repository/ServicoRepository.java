package io.github.oliverrai.clientes.repository;

import io.github.oliverrai.clientes.model.ServicoPrestado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServicoRepository extends JpaRepository<ServicoPrestado, Integer> {
}
