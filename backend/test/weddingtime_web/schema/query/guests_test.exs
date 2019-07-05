defmodule WeddingtimeWeb.Schema.Query.GuestsTest do
  use WeddingtimeWeb.ConnCase, async: true

  alias Weddingtime.Attendance

  @valid_attrs %{forename: "some forename", surname: "some surname"}
  def guest_fixture(attrs \\ %{}) do
    {:ok, guest} =
      attrs
      |> Enum.into(@valid_attrs)
      |> Attendance.create_guest()

    guest
  end

  @query """
  {
    guests {
      id
    }
  }
  """
  test "guest query returns all guests" do
    guests =
      Enum.reduce([1, 2, 3], [], fn _, acc ->
        %{id: id} = guest_fixture()
        acc ++ [%{"id" => id}]
      end)

    conn = build_conn()
    conn = get conn, "/api", query: @query

    expected = %{
      "data" => %{
        "guests" => guests
      }
    }

    assert expected == json_response(conn, 200)
  end
end
