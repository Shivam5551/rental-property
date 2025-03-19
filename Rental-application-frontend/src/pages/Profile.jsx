import { Appbar } from '../components/Appbar';
import { Footer } from '../components/Footer';

const Profile = () => {
    const bookedProperties = [
        { id: 1, name: 'Luxury Apartment', location: 'New York, NY', date: 'March 10, 2025' },
        { id: 2, name: 'Beach House', location: 'Miami, FL', date: 'February 25, 2025' },
    ];

    const handleListProperty = () => {
        console.log('Redirect to List Property page');
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Appbar />
            <div className="container mx-auto px-6 py-12 flex-1">
                <h1 className="text-3xl font-bold text-center mb-6">User Profile</h1>
                <div className="bg-white shadow-lg rounded-lg p-6 max-w-3xl mx-auto">
                    <h2 className="text-xl font-semibold mb-4">Previously Booked Properties</h2>
                    {bookedProperties.length > 0 ? (
                        <div className="space-y-4">
                            {bookedProperties.map((property) => (
                                <Card key={property.id} className="border p-4">
                                    <CardContent>
                                        <h3 className="text-lg font-semibold">{property.name}</h3>
                                        <p className="text-gray-600">Location: {property.location}</p>
                                        <p className="text-gray-500">Booked on: {property.date}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500">No properties booked yet.</p>
                    )}
                </div>
                <div className="text-center mt-6">
                    <Button onClick={handleListProperty} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
                        Rent Your Own Property
                    </Button>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Profile;
