import React from 'react';
import './about.scss';
import '../../grid.scss';
import aboutImage from '../../images/about/about.jpg';

const About = () => {
  return (
    <section className="about container--fluid">
      <div className="container__row">
        <div className="about__text container__col-md-12">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
            velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia
            nisi ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat
            ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet
            urna imperdiet ac. Sed nec nulla aliquam, bibendum odio eget,
            vestibulum tortor. Cras rutrum ligula in tincidunt commodo. Morbi
            sit amet mollis orci, in tristique ex. Donec nec ornare elit. Donec
            blandit est sed risus feugiat porttitor. Vestibulum molestie
            hendrerit massa non consequat. Vestibulum vitae lorem tortor. In
            elementum ultricies tempus. Interdum et malesuada fames ac ante
            ipsum primis in faucibus.
          </p>
        </div>
        <div className="about__img container__col-md-12 col-lg-6">
          <img src={aboutImage} alt="a man holding sun in hands"></img>
        </div>
      </div>
    </section>
  );
};

export default About;
