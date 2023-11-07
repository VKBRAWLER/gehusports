import SportsList from "@components/SportsList";
const EventsPageParams = () => {
  return (
    <main>
			<SportsList status='UPCOMING' filter={null} />
    </main>
  )
}

export default EventsPageParams;