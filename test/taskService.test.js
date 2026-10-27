const test = require('node:test')
const assert = require('node:assert/strict')
const { TaskService } = require('../dist/services/TaskService')

test('TaskService — Testes Unitários de Operações CRUD em Memória', async (t) => {
  const service = new TaskService()

  await t.test('deve inicializar com lista vazia', () => {
    assert.deepEqual(service.getAll(), [])
  })

  await t.test('deve criar uma nova tarefa com id incremental e status done=false', () => {
    const task = service.create('Aprender TypeScript')
    assert.equal(task.id, 1)
    assert.equal(task.title, 'Aprender TypeScript')
    assert.equal(task.done, false)
    assert.equal(service.getAll().length, 1)
  })

  await t.test('deve buscar uma tarefa existente por ID', () => {
    const task = service.getOne(1)
    assert.ok(task)
    assert.equal(task.id, 1)
    assert.equal(task.title, 'Aprender TypeScript')
  })

  await t.test('deve atualizar o título e status de conclusão da tarefa', () => {
    const updated = service.update(1, 'Aprender TypeScript Avançado', true)
    assert.equal(updated.title, 'Aprender TypeScript Avançado')
    assert.equal(updated.done, true)
  })

  await t.test('deve lançar erro ao tentar criar tarefa sem título válido', () => {
    assert.throws(() => service.create(''), /Título inválido/)
  })

  await t.test('deve remover tarefa por ID e retornar true', () => {
    const removed = service.delete(1)
    assert.equal(removed, true)
    assert.deepEqual(service.getAll(), [])
  })

  await t.test('deve lançar erro ao tentar atualizar tarefa inexistente', () => {
    assert.throws(() => service.update(999, 'Inexistente'), /Tarefa não encontrada/)
  })
})
