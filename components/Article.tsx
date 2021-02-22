type Props = {
  title: string;
  url: string;
  date: string;
  likes: number;
  description: string;
};

function Article({ title, url, date, likes, description }: Props) {
  return (
    <>
      <h3>
        <a href={url}>{title}</a>
      </h3>
      <p>{description}</p>
      <strong>
        LIKES: {likes} POSTED: {date}
      </strong>
      <hr />
    </>
  );
}

export default Article;
