package io.github.oliverrai.clientes.repository;

import io.github.oliverrai.clientes.model.ServicoPrestado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ServicoPrestadoRepository extends JpaRepository<ServicoPrestado, Integer> {
    @Query("select s from ServicoPrestado s join s.cliente c " +
            "where upper(c.nome) like upper( :nome) and MONTH(s.data) =:mes")
    List<ServicoPrestado> findByNomeClienteAndMes(@Param("nome")String nome, @Param("mes") Integer mes);
}
