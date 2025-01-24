import hazem from '../../assets/Hazem.jpg';
import Title from '../../components/Title';

export default function About() {
  return (
    <section className="about">
      <Title line>About Me</Title>
      <div className="about-box">
        <div className="about-summary">
          <p className="text">
            Welcome! My name is Hazem, and I enjoy creating things that come to
            life on the internet. My interest in web development reignited in
            2021, marking the beginning of a journey I had always dreamed of
            continuing.😊
          </p>
          <p className="text">
            To Build responsive,intuitive,and engaging website, proven Results:
            My Development Skills consistently deliver high-quality,
            user-friendly websites that enhance user engagement satisfaction.
          </p>
          <div className="tech">
            <h4 className="tech-title">
              Here are a few technologies I’ve been working with recently:
            </h4>
            <ul className="tech-list fira">
              <li className="tech-list-item">JavaScript (ES6+)</li>
              <li className="tech-list-item">TypeScript</li>
              <li className="tech-list-item">React.js</li>
              <li className="tech-list-item">Next.js</li>
              <li className="tech-list-item">Angular (Still Learning)</li>
              <li className="tech-list-item">Sass</li>
            </ul>
          </div>
        </div>
        <div className="about-img">
          <img className="img-fluid" src={hazem} alt="Hazem" />
        </div>
      </div>
    </section>
  );
}
// 'SF Mono','Fira Code','Fira Mono','Roboto Mono',monospace
