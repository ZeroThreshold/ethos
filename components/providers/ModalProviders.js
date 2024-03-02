"use client";

import { useState, useEffect } from "react";
import { InviteModal } from "../modals/InviteModal";
import { MembersModal } from "../modals/MemberModal";
import { CreateChannelModal } from "../modals/ChannelModal";
import { LeaveServerModal } from "../modals/LeaveServerModal";
import { DeleteServerModal } from "../modals/DeleteServerModal";
import { DeleteChannelModal } from "../modals/DeleteChannel";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <InviteModal />
      <MembersModal />
      <CreateChannelModal />
      <LeaveServerModal />
      <DeleteServerModal />
      <DeleteChannelModal />
    </>
  );
};
