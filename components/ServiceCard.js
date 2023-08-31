const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

const ServiceCard = ({ title, description, image, url }) => {
  return (
    <section>
      <ConditionalWrapper
        condition={url}
        wrapper={(children) => <a href={url}>{children}</a>}
      >
        <>
          <h2>{title}</h2>
          <p>{description}</p>
          <img src={image} alt={title} />
        </>
      </ConditionalWrapper>
    </section>
  );
};
