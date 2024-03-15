import '../Style/About.css'

const About = () => {
  return (
    <div className="wrapper">
      <div className="flex items-center gap-4 flex-col md:flex-row">
        <div className='about_content '>
        <h1 className='about_title'>You're moving to the valley...</h1>
        <p className='about_subtitle'>
          You’ve inherited your grandfather’s old farm plot in Stardew Valley.
          Armed with hand-me-down tools and a few coins, you set out to begin
          your new life. Can you learn to live off the land and turn these
          overgrown fields into a thriving home? It won’t be easy. Ever since
          Joja Corporation came to town, the old ways of life have all but
          disappeared. The community center, once the town’s most vibrant hub of
          activity, now lies in shambles. But the valley seems full of
          opportunity. With a little dedication, you might just be the one to
          restore Stardew Valley to greatness!
        </p>
        <p className='about_ab'>Software description provided by the publisher.</p>
        <button className='d-download '>Explore this game's official website</button>
        </div>
        <div>
            <img src="/images/hero.avif" alt="" className='about_image'/>
        </div>
      </div>
    </div>
  );
};

export default About;
