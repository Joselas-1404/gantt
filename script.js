document.addEventListener('DOMContentLoaded', () => {
    const ganttBody = document.getElementById('ganttBody');
    const addRowButton = document.getElementById('addRow');
    const addWeekButton = document.getElementById('addWeek');
    const ganttHeader = document.getElementById('ganttHeader');
    let weekCount = 8; // Número inicial de semanas

    function createRow() {
        const row = document.createElement('tr');

        // Columna editable para la actividad
        const activityCell = document.createElement('td');
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Escribe aquí...';
        activityCell.appendChild(input);
        activityCell.classList.add('task');
        row.appendChild(activityCell);

        // Crear celdas de semanas con funcionalidad interactiva
        for (let i = 0; i < weekCount; i++) {
            const weekCell = document.createElement('td');
            weekCell.classList.add('week');
            weekCell.style.cursor = 'pointer';
            weekCell.addEventListener('click', (event) => {
                event.target.classList.toggle('active');
                event.target.style.backgroundColor = event.target.classList.contains('active') ? 'rgb(76, 175, 80)' : '';
            });
            row.appendChild(weekCell);
        }

        ganttBody.appendChild(row);
    }

    function addWeekColumn() {
        weekCount++;

        // Agregar nueva columna en el encabezado
        const newHeader = document.createElement('th');
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Semana ${weekCount}`;
        input.classList.add('week-input');
        newHeader.appendChild(input);
        ganttHeader.appendChild(newHeader);

        // Agregar nueva celda en cada fila existente
        const rows = ganttBody.querySelectorAll('tr');
        rows.forEach(row => {
            const weekCell = document.createElement('td');
            weekCell.classList.add('week');
            weekCell.style.cursor = 'pointer';
            weekCell.addEventListener('click', (event) => {
                event.target.classList.toggle('active');
                event.target.style.backgroundColor = event.target.classList.contains('active') ? 'rgb(76, 175, 80)' : '';
            });
            row.appendChild(weekCell);
        });
    }

    // Agregar una fila inicial automáticamente
    createRow();

    // Evento para agregar más filas dinámicamente
    addRowButton.addEventListener('click', createRow);
    addWeekButton.addEventListener('click', addWeekColumn);
});
