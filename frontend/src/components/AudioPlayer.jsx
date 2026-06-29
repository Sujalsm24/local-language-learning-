import { FaVolumeUp } from "react-icons/fa";

function AudioPlayer({ audio }) {
  if (!audio) return null;

  return (
    <div className="mt-4">

      <div className="flex items-center gap-2 mb-2">
        <FaVolumeUp />
        <span>Pronunciation</span>
      </div>

      <audio controls className="w-full">
        <source src={audio} type="audio/mpeg" />
        Your browser does not support audio.
      </audio>

    </div>
  );
}

export default AudioPlayer;
