interface MessageProps {
  text: string;
}

const Message = ({ text }: MessageProps) => {
  return <div>{text}</div>;
};

export default Message;