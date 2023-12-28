// our-domain/news
import Link from 'next/link';
import { Fragment } from 'react';
const NewsHomePage=()=>{
    return (
        <Fragment>
    <h1>The Home News Page</h1>
    <ul>
        <li>
            <Link href='/news/1'>Link to id 1</Link>
        </li>
        <li>
            <Link href='/news/2'>Link to id 2</Link>
        </li>
        <li>
            <Link href='/news/3'>Link to id 3</Link>
        </li>
    </ul>
    </Fragment>);
}
export default NewsHomePage