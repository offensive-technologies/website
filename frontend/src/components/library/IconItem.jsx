export default function IconItem({ lb, onClick }) {
  return (
    <div onClick={() => onClick(lb.title)}>
      <img className="icon" src={lb.img} alt={lb.title} />
      <p>{lb.title}</p>
    </div>
  );
}
