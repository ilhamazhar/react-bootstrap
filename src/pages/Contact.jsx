import Card from "./../components/Card";
import personal from "./../data";

const Contact = () => {
  console.log(personal);

  return (
    <div className="text-center">
      <div className="row gap-3">
        <h1 className="fw-light">Contact us</h1>
        {personal.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            gender={item.gender}
            phone={item.phone}
            status={item.status}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
