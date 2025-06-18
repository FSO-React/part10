import { render, screen } from '@testing-library/react-native';
import { RepositoryListContainer } from '../../components/RepositoryList';
import { repositories } from '../data/repositories';


describe('RepositoryList', () => {
  it('a list of repositories is rendered', () => {
    render(<RepositoryListContainer repositories={repositories} />);
    expect(screen.getByText('jaredpalmer/formik')).toBeDefined();
    expect(screen.getByText('async-library/react-async')).toBeDefined();
    expect(screen.getByText('rzwitserloot/lombok')).toBeDefined();
    expect(screen.getByText('zeit/swr')).toBeDefined();
  });
});