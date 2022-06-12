//Array registro de turnos 2022

class Appointment {
    constructor(paciente, mes, dia, hora) {
        this.paciente = paciente.toUpperCase();
        this.mes = mes.toUpperCase();
        this.dia = parseFloat(dia);
        this.hora = parseFloat(hora);
    }
}

const appointments = [];
appointments.push (new Appointment("Beth Pearson", "july", "3", "11"));
appointments.push (new Appointment("Ronald Waesley", "june", "30", "10"));
appointments.push (new Appointment("Sherlock Holmes", "july", "3", "10"));

for (const i of appointments) {
    alert("Paciente: " + i.paciente + " / " + "Turno: " + i.mes + " " + i.dia + " - " + i.hora + " hs." );
}


