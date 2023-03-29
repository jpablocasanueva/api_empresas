$(document).ready(() => {
  const getEmpleados = async () => {
    try {
      let res = await axios.get(
        "http://localhost:3000/api/empleados",
        { crossdomain: true },
        { responseType: "json" }
      );

      if (res.status == 200) {
        console.log(res.status);
      }

      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getEmpresas = async () => {
    try {
      let res = await axios.get(
        "http://localhost:3000/api/empresas",
        { crossdomain: true },
        { responseType: "json" }
      );

      if (res.status == 200) {
        console.log(res.status);
      }

      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  async function fillEmpleados() {
    let empresas = await getEmpleados();

    // $.each(empresas, (i, value) => {
    //   console.log(value);
    // });

    $("#tbl_empleados").DataTable({
      language: {
        url: "//cdn.datatables.net/plug-ins/1.11.5/i18n/es-CL.json",
      },
      data: empresas,
      columns: [
        { data: "rut" },
        { data: "nombre" },
        { data: "email" },
        { data: "empresa" },
      ],
      dom: "Blfrtip",
      buttons: ["csv", "excel"],
      bDestroy: "true",
      processing: true,
    });
  }

  async function fillEmpresas() {
    let empresas = await getEmpresas();
    let selEmpresas = $("#selEmpresa");

    $.each(empresas, (i, value) => {
      selEmpresas.append(
        $("<option />").val(value["nombre"]).text(value["nombre"])
      );
    });
  }

  fillEmpleados();
  fillEmpresas();
});

$("#frmAddEmpleado").submit(async function (e) {
  e.preventDefault();
  axios
    .post("http://localhost:3000/api/empleados", {
      nombre: $("#nameEmpleado").val(),
      rut: $("#rutEmpleado").val(),
      empresa: $("#selEmpresa").val(),
      email: $("#emailEmpleado").val(),
    })
    .then((response) => {
      if (response.status == 200) {
        location.reload(true);
      }
    })
    .catch((err) => {
      console.log(error);
    });
});
