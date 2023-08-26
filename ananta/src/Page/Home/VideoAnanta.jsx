const VideoAnanta = () => {
  return (
    <>
      <div>
        <img src="/Assets/FotoDivisi/LogoAnanta.svg" alt="logo ananta" />
      </div>
      <video width="320" height="240" controls>
        <source
          src="https://youtu.be/x8RIixqumUc?si=Gep6R3xg1QNE_AaZ"
          type="video/mp4"
        />
        <source src="movie.ogg" type="video/ogg" />
      </video>
    </>
  );
};

export default VideoAnanta;
