import { render, screen } from '@testing-library/react-native';
import { RepositoryListContainer } from '../../components/RepositoryList';
import { repositories } from '../../../data/repositories';
import { formatStatNumber } from '../../components/RepositoryItem';


describe('RepositoryList', () => {
  it('a list of repositories is rendered', () => {
    render(<RepositoryListContainer repositories={repositories} />);

    const rNs = repositories.edges.map(edge => edge.node); 

    const fullNamesList = screen.getAllByTestId('fullName');
    const descriptionsList = screen.getAllByTestId('description');
    const languagesList = screen.getAllByTestId('language');
    const stargazersCountList = screen.getAllByTestId('stargazersCount');
    const forksCountList = screen.getAllByTestId('forksCount');
    const reviewCountList = screen.getAllByTestId('reviewCount');
    const ratingAverageList = screen.getAllByTestId('ratingAverage');

    for (let i = 0; i < rNs.length; i++) {
      expect(fullNamesList[i]).toHaveTextContent(rNs[i].fullName);
      expect(descriptionsList[i]).toHaveTextContent(rNs[i].description);
      expect(languagesList[i]).toHaveTextContent(rNs[i].language);
      expect(stargazersCountList[i]).toHaveTextContent(String(formatStatNumber(rNs[i].stargazersCount)));
      expect(forksCountList[i]).toHaveTextContent(String(formatStatNumber(rNs[i].forksCount)));
      expect(reviewCountList[i]).toHaveTextContent(String(formatStatNumber(rNs[i].reviewCount)));
      expect(ratingAverageList[i]).toHaveTextContent(String(formatStatNumber(rNs[i].ratingAverage)));
    }
  });
});
