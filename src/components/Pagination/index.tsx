import { Button, Container } from './styles';

interface Props {
  page: number;
  nextPage: () => void;
  previousPage: () => void;
  itemsPerPage: number;
  maxItems: number;
}

const Pagination = (props: Props) => {
  const lastPage = Math.ceil(props.maxItems / props.itemsPerPage);

  return (
    <Container>
      <Button
        disabled={props.page === 1}
        onClick={props.previousPage}
        aria-label="previous page"
      >
        anterior
      </Button>
      <span>{props.page}</span>
      <Button
        disabled={props.page === lastPage}
        onClick={props.nextPage}
        aria-label="next page"
      >
        próximo
      </Button>
    </Container>
  );
};

export default Pagination;
