import React from "react";
import './TodoList.css'

function TodoList() {
    return (
        <div>
            <h1>Lista de Tarefas</h1>
            <form>
                <input type="text" placeholder="Adicione uma Tarefa" />
                <button type="submit">Add</button>
            </form>
            <div className="LlistaTarefas">
                <div className="Item"></div>
                <span>Taefa de exemplo</span>
                <button>Deletar</button>
            </div>
            <div className="item completo">
                <span>Tarefa de Exemplo</span>
                <button>Deletar</button>
            </div>
        </div>
    )

}

export default TodoList