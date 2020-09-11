package io.github.oliverrai.clientes.repository;


import io.github.oliverrai.clientes.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
}
