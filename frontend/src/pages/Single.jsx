import React from "react";
import edit from "../assets/images/edit.png";
import Delete from "../assets/images/delete.png";
import { Link, useParams } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  const { id } = useParams();
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>Paul</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=${id}`}>
              <img src={edit} alt="edit-icon" />
            </Link>

            <img src={Delete} alt="edit-icon" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          adipisci.
        </h1>
        <p>
          Nulla et tempor aliqua esse mollit ut irure excepteur. Ut minim
          incididunt consequat mollit ut et laborum anim nisi aliquip
          incididunt. Proident anim reprehenderit sint qui qui qui. Dolor
          consequat ex cupidatat incididunt nulla duis ea et quis culpa
          reprehenderit occaecat. Incididunt ullamco cillum id aliquip est
          mollit. Elit elit irure laboris laboris ipsum deserunt sunt duis
          irure. Voluptate eiusmod in tempor eu incididunt excepteur laboris
          aliquip laborum proident ex est ea.
          <br />
          <br />
          Qui adipisicing id proident nulla elit id excepteur exercitation enim.
          Labore ad voluptate incididunt minim id. Dolore ullamco aliquip aliqua
          ipsum deserunt. Aute elit esse amet do veniam officia ullamco ad.
          Minim voluptate veniam ipsum exercitation dolore qui commodo do
          tempor. Quis ex culpa laborum irure. Ea cupidatat qui aliquip occaecat
          culpa aute sint consequat consequat officia velit incididunt sit
          ullamco. Eiusmod proident cillum id velit laborum ad ut nostrud
          laboris do laborum id laborum. Tempor exercitation adipisicing
          deserunt id labore.
          <br />
          <br />
          Quis dolore cillum culpa excepteur aliquip ullamco adipisicing sint
          eu. Ipsum excepteur qui ea dolore enim veniam culpa proident officia.
          Voluptate aute ex fugiat duis duis ullamco duis voluptate cupidatat ea
          labore. Laboris non laborum dolore tempor qui eu fugiat sint Lorem.
          Velit ea occaecat dolor anim anim consectetur qui laboris nulla
          officia reprehenderit. Voluptate incididunt fugiat tempor do anim et
          consectetur consectetur consequat id sint sunt ex. \
          <br />
          <br />
          Nisi ipsum voluptate occaecat laborum ullamco fugiat veniam dolor id
          commodo irure dolore incididunt. Sint in cillum ex occaecat est do
          occaecat esse proident amet quis excepteur cillum. Laboris fugiat et
          Lorem est commodo ex ad do ut ullamco irure Lorem ea. Cupidatat irure
          cillum qui culpa laborum ex magna Lorem. Consectetur aliqua incididunt
          commodo labore sit dolor ipsum ad ullamco adipisicing id magna sunt
          nulla. Fugiat labore magna et cillum fugiat duis enim voluptate
          cillum. Nulla laborum aliqua in nisi. Ad fugiat elit non cupidatat
          aute. Ut irure cupidatat non officia. Voluptate minim aliquip
          cupidatat quis nostrud laboris incididunt est proident. Minim laborum
          nulla adipisicing laborum proident culpa occaecat culpa deserunt.
          Culpa anim irure magna laboris ut reprehenderit minim velit aliqua
          sint consequat.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
