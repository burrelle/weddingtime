defmodule Weddingtime.Attendance.Rsvp do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "rsvps" do
    field :party, :string

    has_many :guests, Weddingtime.Attendance.Guest

    timestamps()
  end

  @doc false
  def changeset(rsvp, attrs) do
    rsvp
    |> cast(attrs, [:party])
    |> validate_required([:party])
  end
end
