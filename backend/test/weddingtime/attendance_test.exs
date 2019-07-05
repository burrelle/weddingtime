defmodule Weddingtime.AttendanceTest do
  use Weddingtime.DataCase

  alias Weddingtime.Attendance

  describe "guests" do
    alias Weddingtime.Attendance.Guest

    @valid_attrs %{forename: "some forename", surname: "some surname"}
    @update_attrs %{forename: "some updated forename", surname: "some updated surname"}
    @invalid_attrs %{forename: nil, surname: nil}

    def guest_fixture(attrs \\ %{}) do
      {:ok, guest} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Attendance.create_guest()

      guest
    end

    test "list_guests/0 returns all guests" do
      guest = guest_fixture()
      assert Attendance.list_guests() == [guest]
    end

    test "get_guest!/1 returns the guest with given id" do
      guest = guest_fixture()
      assert Attendance.get_guest!(guest.id) == guest
    end

    test "create_guest/1 with valid data creates a guest" do
      assert {:ok, %Guest{} = guest} = Attendance.create_guest(@valid_attrs)
      assert guest.forename == "some forename"
      assert guest.surname == "some surname"
    end

    test "create_guest/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Attendance.create_guest(@invalid_attrs)
    end

    test "update_guest/2 with valid data updates the guest" do
      guest = guest_fixture()
      assert {:ok, %Guest{} = guest} = Attendance.update_guest(guest, @update_attrs)
      assert guest.forename == "some updated forename"
      assert guest.surname == "some updated surname"
    end

    test "update_guest/2 with invalid data returns error changeset" do
      guest = guest_fixture()
      assert {:error, %Ecto.Changeset{}} = Attendance.update_guest(guest, @invalid_attrs)
      assert guest == Attendance.get_guest!(guest.id)
    end

    test "delete_guest/1 deletes the guest" do
      guest = guest_fixture()
      assert {:ok, %Guest{}} = Attendance.delete_guest(guest)
      assert_raise Ecto.NoResultsError, fn -> Attendance.get_guest!(guest.id) end
    end

    test "change_guest/1 returns a guest changeset" do
      guest = guest_fixture()
      assert %Ecto.Changeset{} = Attendance.change_guest(guest)
    end
  end

  describe "rsvps" do
    alias Weddingtime.Attendance.Rsvp

    @valid_attrs %{party: "some-party"}
    @update_attrs %{party: "updated-some-party"}
    @invalid_attrs %{party: nil}

    def rsvp_fixture(attrs \\ %{}) do
      {:ok, rsvp} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Attendance.create_rsvp()

      rsvp
    end

    test "list_rsvps/0 returns all rsvps" do
      rsvp = rsvp_fixture()
      assert Attendance.list_rsvps() == [rsvp]
    end

    test "get_rsvp!/1 returns the rsvp with given id" do
      rsvp = rsvp_fixture()
      assert Attendance.get_rsvp!(rsvp.id) == rsvp
    end

    test "create_rsvp/1 with valid data creates a rsvp" do
      assert {:ok, %Rsvp{} = rsvp} = Attendance.create_rsvp(@valid_attrs)
    end

    test "create_rsvp/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Attendance.create_rsvp(@invalid_attrs)
    end

    test "update_rsvp/2 with valid data updates the rsvp" do
      rsvp = rsvp_fixture()
      assert {:ok, %Rsvp{} = rsvp} = Attendance.update_rsvp(rsvp, @update_attrs)
    end

    test "update_rsvp/2 with invalid data returns error changeset" do
      rsvp = rsvp_fixture()
      assert {:error, %Ecto.Changeset{}} = Attendance.update_rsvp(rsvp, @invalid_attrs)
      assert rsvp == Attendance.get_rsvp!(rsvp.id)
    end

    test "delete_rsvp/1 deletes the rsvp" do
      rsvp = rsvp_fixture()
      assert {:ok, %Rsvp{}} = Attendance.delete_rsvp(rsvp)
      assert_raise Ecto.NoResultsError, fn -> Attendance.get_rsvp!(rsvp.id) end
    end

    test "change_rsvp/1 returns a rsvp changeset" do
      rsvp = rsvp_fixture()
      assert %Ecto.Changeset{} = Attendance.change_rsvp(rsvp)
    end
  end
end
