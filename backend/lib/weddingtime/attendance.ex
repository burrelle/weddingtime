defmodule Weddingtime.Attendance do
  @moduledoc """
  The Attendance context.
  """

  import Ecto.Query, warn: false
  alias Weddingtime.Repo

  alias Weddingtime.Attendance.Guest

  @doc """
  Returns the list of guests.

  ## Examples

      iex> list_guests()
      [%Guest{}, ...]

  """
  def list_guests do
    Repo.all(Guest)
  end

  def list_guests(criteria) do
    query = from(g in Guest)

    Enum.reduce(criteria, query, fn
      {:attending, attending}, query ->
        from g in query, where: g.attending == ^attending
    end)
    |> Repo.all()
  end

  @doc """
  Gets a single guest.

  Raises `Ecto.NoResultsError` if the Guest does not exist.

  ## Examples

      iex> get_guest!(123)
      %Guest{}

      iex> get_guest!(456)
      ** (Ecto.NoResultsError)

  """
  def get_guest!(id), do: Repo.get!(Guest, id)

  @doc """
  Creates a guest.

  ## Examples

      iex> create_guest(%{field: value})
      {:ok, %Guest{}}

      iex> create_guest(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_guest(attrs \\ %{}) do
    %Guest{}
    |> Guest.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a guest.

  ## Examples

      iex> update_guest(guest, %{field: new_value})
      {:ok, %Guest{}}

      iex> update_guest(guest, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_guest(%Guest{} = guest, attrs) do
    guest
    |> Guest.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Guest.

  ## Examples

      iex> delete_guest(guest)
      {:ok, %Guest{}}

      iex> delete_guest(guest)
      {:error, %Ecto.Changeset{}}

  """
  def delete_guest(%Guest{} = guest) do
    Repo.delete(guest)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking guest changes.

  ## Examples

      iex> change_guest(guest)
      %Ecto.Changeset{source: %Guest{}}

  """
  def change_guest(%Guest{} = guest) do
    Guest.changeset(guest, %{})
  end

  alias Weddingtime.Attendance.Rsvp

  @doc """
  Returns the list of rsvps.

  ## Examples

      iex> list_rsvps()
      [%Rsvp{}, ...]

  """
  def list_rsvps do
    Repo.all(Rsvp)
  end

  @doc """
  Gets a single rsvp.

  Raises `Ecto.NoResultsError` if the Rsvp does not exist.

  ## Examples

      iex> get_rsvp!(123)
      %Rsvp{}

      iex> get_rsvp!(456)
      ** (Ecto.NoResultsError)

  """
  def get_rsvp!(id), do: Repo.get!(Rsvp, id)

  @doc """
  Creates a rsvp.

  ## Examples

      iex> create_rsvp(%{field: value})
      {:ok, %Rsvp{}}

      iex> create_rsvp(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_rsvp(attrs \\ %{}) do
    %Rsvp{}
    |> Rsvp.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a rsvp.

  ## Examples

      iex> update_rsvp(rsvp, %{field: new_value})
      {:ok, %Rsvp{}}

      iex> update_rsvp(rsvp, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_rsvp(%Rsvp{} = rsvp, attrs) do
    rsvp
    |> Rsvp.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Rsvp.

  ## Examples

      iex> delete_rsvp(rsvp)
      {:ok, %Rsvp{}}

      iex> delete_rsvp(rsvp)
      {:error, %Ecto.Changeset{}}

  """
  def delete_rsvp(%Rsvp{} = rsvp) do
    Repo.delete(rsvp)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking rsvp changes.

  ## Examples

      iex> change_rsvp(rsvp)
      %Ecto.Changeset{source: %Rsvp{}}

  """
  def change_rsvp(%Rsvp{} = rsvp) do
    Rsvp.changeset(rsvp, %{})
  end

  def datasource() do
    Dataloader.Ecto.new(Repo, query: &query/2)
  end

  def query(queryable, _) do
    queryable
  end
end
