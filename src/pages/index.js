import propTypes from 'prop-types'
import axios from 'configs/axios';
import Circle from '@/public/images/circle-accent-1.svg';

Home.propTypes = {
  data: propTypes.array
}

function Home({ data }) {
  return (
    <div className="container mx-auto mt-4">
      <main>
        <section className="pt-10">
          <Circle className="absolute left-0 bottom-0"></Circle>
        </section>
      </main>
    </div>
  );
}

Home.getInitialProps = async () => {
  try {
    const data = await axios.get(`/courses`);
    return { data: data.data.data };
  } catch (error) {
    return error;
  }
}

export default Home;