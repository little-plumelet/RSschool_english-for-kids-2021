import './styles.scss';
import header from './header/create_header';
import footer from './footer/create_footer';
import containerOfAllCategories from './set-of-categories/create_container_of_all_categories';
import statisticPage from './statistics/create_statistics_page';

document.body.appendChild(header.header);
document.body.appendChild(containerOfAllCategories);
document.body.appendChild(statisticPage.container);
document.body.appendChild(footer.footer);
