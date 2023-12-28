// pages/news/[newsid].js

import { useRouter } from 'next/router';

const details = [
    { id: 1, name: 'Yash', role: 'Senior Developer' },
    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
    { id: 3, name: 'Suresh', role: 'Frontend Developer' },
];

function NewsDetails() {
    const router = useRouter();
    const id = router.query.newsid;

    if (id) {
        const selectedItem = details.find(item => item.id == id);

        if (selectedItem) {
            return (
                <div key={selectedItem.id}>
                    <h4>Name: {selectedItem.name}</h4>
                    <p>Role: {selectedItem.role}</p>
                </div>
            );
        }
    }

    return <p>No details found</p>;
}

export default NewsDetails;
