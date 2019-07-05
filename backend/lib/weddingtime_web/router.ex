defmodule WeddingtimeWeb.Router do
  use WeddingtimeWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/" do
    pipe_through :api

    forward "/api", Absinthe.Plug,
      schema: WeddingtimeWeb.Schema.Schema

    forward "/graphiql", Absinthe.Plug.GraphiQL,
      schema: WeddingtimeWeb.Schema.Schema,
      interface: :simple
    end
end
