import { useListUserReactions } from "@/shared/hooks/react-query/use-list-user-reactions";
import { ReactionCard } from "./components/reaction-card";
import { useAuthStore } from "@/store/auth";

function ReactionsPage() {
  const { token } = useAuthStore();
  const { data, isLoading } = useListUserReactions({ enabled: token !== null });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (token === null) {
    return (
      <p className="text-center">
        Debes iniciar sesi&oacute;n para ver tus reacciones
      </p>
    );
  }

  return (
    <div className="container py-2 space-y-6">
      <h1 className="text-2xl font-bold">Mis reacciones</h1>

      <p className="text-muted-foreground">
        Aqu&iacute; encontrar&aacute;s todas tus reacciones
      </p>

      {data?.data.length === 0 ? (
        <p className="text-muted-foreground">
          No has realizado ninguna reacci&oacute;n
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data?.data.map((item) => (
            <ReactionCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ReactionsPage;
