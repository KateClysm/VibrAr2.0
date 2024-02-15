import LongPill from "../../components/long_pill/LongPill";
import Noticia from "../../components/noticia/Noticia";
import "./noticias.scss";

function Noticias () {

  return (
    <div className="noticias">
        <LongPill
        title={"RUMORES? QUIÉN LOS NECESITA!"}
        text={
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint vel possimus saepe enim animi culpa, at voluptas veniam tempora pariatur esse accusantium deleniti dolorem quasi quis repellendus recusandae quas debitis, incidunt quod. Assumenda nulla debitis itaque veritatis nam temporibus suscipit eum doloribus inventore accusamus quam et."
        }
        color={true}
      />

      <Noticia imagen="https://ca-times.brightspotcdn.com/dims4/default/3cb7fc7/2147483647/strip/true/crop/4000x2667+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb6%2F81%2Fa9a1fd53a65466e0ad22e24b60cd%2F9815593bc3794c23babe2cfcdb3d76c6" titulo="Taylor en su nuevo traje" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum nulla et aut rerum quod laboriosam explicabo distinctio hic veniam?"/>
      
      <Noticia imagen="https://ca-times.brightspotcdn.com/dims4/default/3cb7fc7/2147483647/strip/true/crop/4000x2667+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb6%2F81%2Fa9a1fd53a65466e0ad22e24b60cd%2F9815593bc3794c23babe2cfcdb3d76c6" titulo="Taylor en su nuevo traje" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum nulla et aut rerum quod laboriosam explicabo distinctio hic veniam?"/>

      <Noticia imagen="https://ca-times.brightspotcdn.com/dims4/default/3cb7fc7/2147483647/strip/true/crop/4000x2667+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb6%2F81%2Fa9a1fd53a65466e0ad22e24b60cd%2F9815593bc3794c23babe2cfcdb3d76c6" titulo="Taylor en su nuevo traje" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum nulla et aut rerum quod laboriosam explicabo distinctio hic veniam?"/>

      <Noticia imagen="https://ca-times.brightspotcdn.com/dims4/default/3cb7fc7/2147483647/strip/true/crop/4000x2667+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb6%2F81%2Fa9a1fd53a65466e0ad22e24b60cd%2F9815593bc3794c23babe2cfcdb3d76c6" titulo="Taylor en su nuevo traje" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum nulla et aut rerum quod laboriosam explicabo distinctio hic veniam?"/>

      <Noticia imagen="https://ca-times.brightspotcdn.com/dims4/default/3cb7fc7/2147483647/strip/true/crop/4000x2667+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fb6%2F81%2Fa9a1fd53a65466e0ad22e24b60cd%2F9815593bc3794c23babe2cfcdb3d76c6" titulo="Taylor en su nuevo traje" texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia laborum nulla et aut rerum quod laboriosam explicabo distinctio hic veniam?"/>
    </div>
  );
}

export default Noticias;
