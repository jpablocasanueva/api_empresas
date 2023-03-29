$(document).ready(() => {
  const getCEmpresas = async () => {
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

  async function fillEmpresas() {
    let empresas = await getCEmpresas();

    $.each(empresas, (i, value) => {
      console.log(value);
    });

    $("#tbl_empresas").DataTable({
      language: {
        url: "//cdn.datatables.net/plug-ins/1.11.5/i18n/es-CL.json",
      },
      data: empresas,
      columns: [
        { data: "rut" },
        { data: "nombre" },
        { data: "direccion" },
        { data: "telefono" },
      ],
      dom: "Blfrtip",
      buttons: ["csv", "excel"],
      bDestroy: "true",
      processing: true,
    });
  }

  fillEmpresas();
});

const getCEmpresas = async () => {
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

$("#frmAddEmpresa").submit(async function (e) {
  e.preventDefault();
  axios
    .post("http://localhost:3000/api/empresas", {
      nombre: $("#nameEmpresa").val(),
      rut: $("#rutEmpresa").val(),
      direccion: $("#dirEmpresa").val(),
      telefono: $("#fonoEmpresa").val(),
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
