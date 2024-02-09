import TutorCard from "./tutorcard";
const Main = () => {
  return (
    <main className="hero">
      <div className="texts">
        <div className="info">Growing Community</div>
        <h1>
          <div>
            Connecting
            <span>
              <div className="chips">
                <div className="chip"></div>
                <div className="chip"></div>
                <div className="chip"></div>
                <div className="chip"></div>
              </div>
              you
            </span>
          </div>
          to your perfect tutor
        </h1>
        <p>
          We believe learning is fun and effective with like-minded individuals
          and familiar experts. Join the peer-to-peer community for a
          personalized experience that's all about you!
        </p>
        <div className="buttons">
          <button className="secondary-button">Learn more</button>
          <a href="/signup">
            <button className="primary-button">Join us today!</button>
          </a>
        </div>
      </div>
      <TutorCard></TutorCard>
    </main>
  );
};
export default Main;
