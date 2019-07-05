defmodule Weddingtime.Attendance.Guest do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id
  schema "guests" do
    field :forename, :string
    field :surname, :string
    field :attending, :boolean, default: false

    belongs_to :rsvp, Weddingtime.Attendance.Rsvp

    timestamps()
  end

  @doc false
  def changeset(guest, attrs) do
    guest
    |> cast(attrs, [:forename, :surname, :attending, :rsvp_id])
    |> assoc_constraint(:rsvp)
    |> validate_required([:forename, :surname])
  end
end
