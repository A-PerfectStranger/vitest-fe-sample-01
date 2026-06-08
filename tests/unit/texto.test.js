import { describe, it, expect } from 'vitest';
import { validarTexto, formatearTexto } from '../../src/js/utils/texto.js';

// ============================================================
// Pruebas unitarias para validarTexto
// ============================================================
describe('validarTexto', () => {
  // --- Casos válidos ---
  it('debe retornar válido para un texto con 3 o más caracteres', () => {
    const resultado = validarTexto('Comprar pan');
    expect(resultado.valido).toBe(true);
    expect(resultado.error).toBe('');
  });

  it('debe retornar válido para un texto con exactamente 3 caracteres', () => {
    const resultado = validarTexto('ABC');
    expect(resultado.valido).toBe(true);
  });

  it('debe retornar válido para un texto con 200 caracteres (límite)', () => {
    const texto = 'A'.repeat(200);
    const resultado = validarTexto(texto);
    expect(resultado.valido).toBe(true);
  });

  // --- Casos inválidos ---
  it('debe retornar inválido cuando el texto está vacío', () => {
    const resultado = validarTexto(''); // Arrange - Act
    expect(resultado.valido).toBe(false); // Assert
    expect(resultado.error).toContain('vacío');
  });

  it('debe retornar inválido cuando hay menos de 3 caracteres', () => {
    const resultado = validarTexto('ab'); // Arrange - Act
    expect(resultado.valido).toBe(false); // Assert
    expect(resultado.error).toContain('al menos');
  });



});

// ============================================================
// Pruebas unitarias para formatearTexto
// ============================================================
describe('formatearTexto', () => {
  it('debe convertir la primera letra a mayúscula y el resto a minúscula', () => {
    const resultado = formatearTexto('hOLA MUNDO');
    expect(resultado).toBe('Hola mundo');
  });

  it('debe retornar un string vacío si se ingresa un string vacío', () => {
    const resultado = formatearTexto('');
    expect(resultado).toBe('');
  });

  it('debe retornar un string vacío si solo hay espacios', () => {
    const resultado = formatearTexto('    ');
    expect(resultado).toBe('');
  });

  it('debe retornar un string formateado a pesar de contener caracteres especiales', () => {
    const resultado = formatearTexto('árbol');
    expect(resultado).toBe('Árbol');
  });

  it('debe retornar el string inalterado si está formateado', () => {
    const resultado = formatearTexto('Árbol');
    expect(resultado).toBe('Árbol');
  });
});
