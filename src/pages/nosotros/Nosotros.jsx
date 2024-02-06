import LongPill from "../../components/long_pill/LongPill";
import "./nosotros.scss";
import nosotros from "/nosotros.jpg"
import logo from "/vibrarBlanco.png"
function Nosotros () {


  return (
    <div className="nosotros">

        <img src={logo} alt="" className="logo"/>
        <LongPill title={"Quiénes somos?"} text="Somos un grupo voluntario de personas unidas por el amor a la música"/>


        <img src={nosotros} alt="" className="nosotros-img"/>

        <LongPill
        title={"NUESTRA META"}
        text={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint vel possimus saepe enim animi culpa, at voluptas veniam tempora pariatur esse accusantium deleniti dolorem quasi quis repellendus recusandae quas debitis, incidunt quod. Assumenda nulla debitis itaque veritatis nam temporibus suscipit eum doloribus inventore accusamus quam et, tenetur in! Perspiciatis impedit et, aliquam perferendis consequuntur nulla voluptate, culpa amet natus numquam veniam tempora labore illo vero nostrum dolores placeat! Corrupti architecto, natus incidunt reprehenderit pariatur cum accusantium voluptatum, quisquam ut veniam vel harum quos quod doloremque sed distinctio aperiam sequi ducimus repudiandae est unde neque ex dolorem! Non architecto unde vitae."
        }
        color={true}
      />

    <LongPill
        title={"NUESTROS IDEALES"}
        text={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint vel possimus saepe enim animi culpa, at voluptas veniam tempora pariatur esse accusantium deleniti dolorem quasi quis repellendus recusandae quas debitis, incidunt quod. Assumenda nulla debitis itaque veritatis nam temporibus suscipit eum doloribus inventore accusamus quam et, tenetur in! Perspiciatis impedit et."
        }
      />
    </div>
  );
}

export default Nosotros;


