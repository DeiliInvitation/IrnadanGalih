import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

type Guest = {
  _id?: string;
  Name: string;
  Message: string;
  Confirmation: string;
  client_id: string;
};

type Client = {
  _id?: string;
  name: string;
  contact: string;
  invitation_types: string;
};

export const useGetGuestsByClient = (clientId: string, refetchDependency: boolean) => {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGuests = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/guests`, {
          params: { client_id: clientId },
        });
        setGuests(response.data);
      } catch (err) {
        setError((err as any).message);
      } finally {
        setLoading(false);
      }
    };

    if (clientId) {
      fetchGuests();
    }
  }, [clientId, refetchDependency]);

  return { guests, loading, error };
};

export const useGetGuestById = (guestId: string) => {
  const [guest, setGuest] = useState<Guest | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGuest = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/guests/${guestId}`);
        setGuest(response.data);
      } catch (err) {
        setError((err as any).message);
      } finally {
        setLoading(false);
      }
    };

    if (guestId) {
      fetchGuest();
    }
  }, [guestId]);

  return { guest, loading, error };
};

// Hook for posting a new guest
export const usePostGuest = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const postGuest = async (guest: Guest) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post(`${API_URL}/guests`, guest);
      if (response.status === 200) {
        setSuccess(true);
      }
    } catch (err) {
      setError((err as any).message);
    } finally {
      setLoading(false);
    }
  };

  return { postGuest, loading, error, success };
};