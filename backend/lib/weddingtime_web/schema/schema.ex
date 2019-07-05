defmodule WeddingtimeWeb.Schema.Schema do
  use Absinthe.Schema
  import Absinthe.Resolution.Helpers, only: [dataloader: 1]

  alias WeddingtimeWeb.GuestResolver
  alias Weddingtime.Attendance

  object :guest do
    field :id, non_null(:id)
    field :forename, non_null(:string)
    field :surname, non_null(:string)
    field :attending, non_null(:string)
  end

  object :rsvp do
    field :party, :string
    field :guests, list_of(:guest), resolve: dataloader(Attendance)
  end

  query do
    @desc "Get all guests"
    field :guests, non_null(list_of(non_null(:guest))) do
      arg :attending, :boolean
      resolve(&GuestResolver.guests/3)
    end

    @desc "Get all rsvps"
    field :all_rsvps, non_null(list_of(:rsvp)) do
      resolve(&GuestResolver.all_rsvps/3)
    end
  end

  def context(ctx) do
    loader =
      Dataloader.new
      |> Dataloader.add_source(Attendance, Attendance.datasource())

    Map.put(ctx, :loader, loader)
  end

  def plugins do
    [Absinthe.Middleware.Dataloader] ++ Absinthe.Plugin.defaults()
  end
end
